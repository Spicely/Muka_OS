import React, { Component } from 'react'
import { message, Upload } from 'antd'
import { omit, isFunction, hash } from 'muka'
import styled from 'styled-components'
import { UploadChangeParam, UploadProps } from 'antd/lib/upload'
import Dragger from './dragger'
import { Consumer } from '../ThemeProvider'
import Icon from '../Icon'


export interface IUploadResponse {
    data: string
    [params: string]: any
}

// tslint:disable-next-line: no-empty-interface
export interface IUploadChangeParam extends UploadChangeParam { }

const UploadBox = styled(Upload)`
    .ant-upload {
        ${({ theme }) => theme.borderRadius}
    }
    .ant-upload-list-item {
        ${({ theme }) => theme.borderRadius}
    }
`

export interface IUpload extends UploadProps {
    fileTypes?: string[]
    fileSize?: number
    baseUrl?: string
    onDone?: (params: IUploadResponse[]) => void
    maxLength?: number
}

export default class LUpload extends Component<IUpload, any> {
    public static defaultProps: IUpload = {
        listType: 'picture-card',
        fileTypes: ['image/jpeg', 'image/jpg', 'image/png'],
        name: 'avatar',
        baseUrl: '',
        fileList: []
    }

    public static Dragger = Dragger

    public state = {
        loading: false,
        fileList: []
    }

    public render(): JSX.Element {
        const { className, fileList, maxLength, action } = this.props
        const { loading } = this.state
        const uploadButton = (
            <div>
                <Icon icon={loading ? 'loading' : 'md-add'} rotate={loading ? true : false} />
                <div className="ant-upload-text">上传文件</div>
            </div>
        )
        const props = omit(this.props, ['className', 'onChange', 'onDone', 'fileTypes', 'fileSize', 'maxLength', 'action', 'baseUrl'])
        return (
            <Consumer>
                {
                    (val) => (
                        <UploadBox
                            {...props}
                            action={action}
                            className={className}
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChange}
                        >
                            {(fileList && fileList.length >= (maxLength || 3)) ? null : uploadButton}
                        </UploadBox>
                    )
                }
            </Consumer>

        )
    }

    private beforeUpload = (file: any) => {
        const { fileTypes, fileSize } = this.props
        let hashType = true
        let hashSize = true

        if (fileTypes) {
            hashType = hash(fileTypes, file.type)
            if (!hashType) {
                message.error(`Image must smaller than ${fileTypes.join(' | ')}`)
            }
        }
        if (fileSize) {
            hashSize = file.size / 1024 / 1024 < fileSize
            if (!hashSize) {
                message.error(`Image must smaller than ${fileSize}MB!`)
            }
        }
        return hashType && hashSize
    }

    private handleChange = (info: UploadChangeParam) => {
        const { onDone, onChange } = this.props
        this.setState({ loading: true })
        if (isFunction(onChange)) {
            onChange(info)
        }

        if (info.fileList.every((i) => i.status === 'done')) {
            this.setState({
                loading: false,
            })
            if (isFunction(onDone)) {
                onDone(info.fileList.map((i) => i.response))
            }
        }
    }
}

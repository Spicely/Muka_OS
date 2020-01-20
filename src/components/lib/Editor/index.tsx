import React, { Component } from 'react'
import { isFunction } from 'lodash'
import Quill from 'react-quill'
import { getClassName, IValue, getUnit } from '../utils'
import styled from 'styled-components'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.core.css'

const QuillView = styled(Quill)`
    .ql-editor {
        min-height: ${getUnit(200)};
    }
`

export interface IEditorProps {
    className?: string
    onChange?: (value: string) => void
    value?: string
    container?: any[]
    theme?: 'snow' | 'bubble'
    handlers?: IValue
    onImageChange?: (imageHandler: (url: string) => void) => void
}
const prefixClass = 'editor'

export default class Editor extends Component<IEditorProps, any> {

    public static defaultProps: IEditorProps = {
        theme: 'snow',
        handlers: {},
        container: [
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            ['link', 'image'],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean']
        ]
    }

    public state = {
        value: ''
    }

    private quillRef: any

    public render(): JSX.Element {
        const { className, handlers, container, theme } = this.props
        const { value } = this.state

        return (
            <QuillView
                ref={(el: any) => { this.quillRef = el }}
                className={getClassName(prefixClass, className)}
                value={this.props.value || value}
                onChange={this.handleChange}
                theme={theme}
                modules={{
                    toolbar: {
                        container,
                        handlers: {
                            ...handlers,
                            image: this.handleImgUpload
                        },
                    }
                }}
            />
        )

    }

    private imageHandler = (url: string) => {
        if (typeof this.quillRef.getEditor !== 'function') {
            return undefined
        }
        const quill = this.quillRef.getEditor()
        const range = quill.getSelection()
        const index = range ? range.index : 0
        quill.insertEmbed(index, 'image', url, quill.Quill.sources.USER)
        quill.setSelection(index + 1)
    }

    private handleChange = (value: string) => {
        const { onChange } = this.props
        if (isFunction(onChange)) {
            onChange(value)
        } else {
            this.setState({
                value
            })
        }
    }

    private handleImgUpload = () => {
        const { onImageChange } = this.props
        if (isFunction(onImageChange)) {
            onImageChange(this.imageHandler)
        }
    }
}

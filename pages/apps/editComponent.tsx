import React, { Component, MouseEvent } from 'react'
import { edit_view, edit_view_over, edit_view_box, edit_view_box_label } from './index.less'
import { isFunction } from 'muka'

interface IProps {
    edit: boolean
    onClick: () => void
    onEdit: () => void
    onDelete: () => void
}

export default class EditComponent extends Component<IProps, any> {
    public render(): JSX.Element {
        const { children, edit } = this.props
        return (
            <div className={`${edit_view} ${edit ? edit_view_over : ''}`} onClick={this.handleClick}>
                {children}
                {
                    edit && (
                        <div className={`flex ${edit_view_box}`}>
                            <div className={`${edit_view_box_label}`} onClick={this.handleEdit}>
                                编辑
                            </div>
                            <div className={`${edit_view_box_label}`} onClick={this.handleDelet}>
                                删除
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

    private handleClick = () => {
        const { onClick } = this.props
        if (isFunction(onClick)) {
            onClick()
        }
    }

    private handleEdit = (e: MouseEvent<HTMLDivElement>) => {
        const { onEdit } = this.props
        e.stopPropagation()
        if (isFunction(onEdit)) {
            onEdit()
        }
    }
    
    private handleDelet = (e: MouseEvent<HTMLDivElement>) => {
        const { onDelete } = this.props
        e.stopPropagation()
        if (isFunction(onDelete)) {
            onDelete()
        }
    }
}
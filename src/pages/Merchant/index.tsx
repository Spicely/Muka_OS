import React, { Component, Fragment } from 'react'
import { message } from 'antd'
import styled from 'styled-components'
import { LayoutNavBar } from 'src/layouts/PageLayout'
import { LabelHeader, Button, Dialog, Form, Table, Label, Image } from 'components'
import http, { getTitle } from 'src/utils/axios'
import { connect } from 'react-redux'
import { IRouter } from 'src/store/reducers/router'
import { IJurisd } from 'src/store/reducers/jurisd'
import { IIcons } from 'src/store/reducers/icons'
import { IInitState } from 'src/store/state'
import { NavBarThemeData, Color, getUnit, DialogThemeData } from 'src/components/lib/utils'
import { GlobalView } from 'src/utils/node'
import { IFormFun, IFormItem } from 'src/components/lib/Form'
import { ITableColumns } from 'src/components/lib/Table'

interface IProps {
    lastIds: string[]
    router: IRouter[]
    jurisd: IJurisd[]
    icons: IIcons[]
}

interface IState {
    visible: boolean
    childVisible: boolean
    data: any[]
}

const FormLabel = styled.div`
    width: ${getUnit(90)};
`
const dialogTheme = new DialogThemeData({
    width: 800,
    height: '80%'
})

class Index extends Component<IProps, IState> {

    private fn?: IFormFun

    private childFn?: IFormFun

    private title = getTitle('/merchant')

    public state: IState = {
        visible: false,
        childVisible: false,
        data: []
    }

    private columns: ITableColumns<any>[] = [{
        title: '真实姓名',
        key: 'true_name',
        dataIndex: 'true_name'
    }, {
        title: '使用者手机',
        key: 'mobile',
        dataIndex: 'mobile'
    }, {
        title: '身份证',
        key: 'id_card',
        dataIndex: 'id_card'
    }, {
        title: '营业执照',
        key: 'business',
        dataIndex: 'business',
        render: (val: string) => {
            if (val) {
                const imgUrl = localStorage.getItem('imgUrl')
                return <Image src={imgUrl + '/' + val}  style={{height: getUnit(60)}}/>
            } else {
                return ''
            }
        }
    }, {
        title: '法人名称',
        key: 'legal_person_name',
        dataIndex: 'legal_person_name'
    }, {
        title: '支付宝账号',
        key: 'alipay_account',
        dataIndex: 'alipay_account'
    }, {
        title: '保证金',
        key: 'bond',
        dataIndex: 'bond'
    }, {
        title: '利息',
        key: 'interest',
        dataIndex: 'interest'
    }, {
        title: '最小随机数',
        key: 'random_min_num',
        dataIndex: 'random_min_num'
    }, {
        title: '最大随机数',
        key: 'random_max_num',
        dataIndex: 'random_max_num'
    }, {
        title: '操作',
        key: 'actions',
        render: (val: any, data: any) => {
            return (
                <Fragment>
                    <Label onClick={this.handleEdit.bind(this, data)}>修改</Label>
                    <Label onClick={this.handleAddChild.bind(this, data.id)}>添加下级</Label>
                </Fragment>
            )
        }
    }]

    private childColumns: ITableColumns<any>[] = [{
        title: '真实姓名',
        key: 'true_name',
        dataIndex: 'true_name'
    }, {
        title: '使用者手机',
        key: 'mobile',
        dataIndex: 'mobile'
    }, {
        title: '身份证',
        key: 'id_card',
        dataIndex: 'id_card'
    }, {
        title: '支付宝账号',
        key: 'alipay_account',
        dataIndex: 'alipay_account'
    }, {
        title: '保证金',
        key: 'bond',
        dataIndex: 'bond'
    }, {
        title: '利息',
        key: 'interest',
        dataIndex: 'interest'
    }, {
        title: '最小随机数',
        key: 'random_min_num',
        dataIndex: 'random_min_num'
    }, {
        title: '最大随机数',
        key: 'random_max_num',
        dataIndex: 'random_max_num'
    }, {
        title: '操作',
        key: 'actions',
        render: (val: any, data: any) => {
            return (
                <Fragment>
                    <Label onClick={this.handleChildEdit.bind(this, data)}>修改</Label>
                </Fragment>
            )
        }
    }]

    public render(): JSX.Element {
        const { visible, data, childVisible } = this.state
        return (
            <GlobalView>
                <LayoutNavBar
                    left={null}
                    theme={new NavBarThemeData({ navBarColor: Color.fromRGB(255, 255, 255) })}
                    title={<LabelHeader title={this.title} line="vertical" />}
                    right={
                        <Button mold="primary" onClick={this.handleAddShop}>添加商户</Button>
                    }
                />
                <Table
                    columns={this.columns}
                    dataSource={data}
                    rowKey={(val) => val.id}
                    expandedRowRender={this.handleRender}
                />
                <Dialog
                    visible={visible}
                    title="添加商户"
                    onClose={this.handleVisibleClose}
                    theme={dialogTheme}
                    async
                    onOk={this.handleOk}
                >
                    <div className="flex_center">
                        <div style={{ padding: getUnit(10), width: getUnit(600) }}>
                            <Form getItems={this.getItems} />
                        </div>
                    </div>
                </Dialog>
                <Dialog
                    visible={childVisible}
                    title="添加下级"
                    onClose={this.handleVisibleClose}
                    theme={dialogTheme}
                    async
                    onOk={this.handleChildOk}
                >
                    <div className="flex_center">
                        <div style={{ padding: getUnit(10), width: getUnit(600) }}>
                            <Form getItems={this.getChildItems} />
                        </div>
                    </div>
                </Dialog>
            </GlobalView>
        )
    }

    public componentDidMount() {
        this.getData()
    }

    private handleRender = (data: any) => {
        return (
            <Table
                columns={this.childColumns}
                dataSource={data.children}
                rowKey={(val) => val.id}
                pagination={false}
            />
        )
    }

    private getData = async () => {
        try {
            const data = await http('merchant-manage', {}, { method: 'GET' })
            this.setState({
                data
            })
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private handleAddChild = (id: string) => {
        this.setState({
            childVisible: true
        }, () => {
            setTimeout(() => {
                this.childFn && this.childFn.setFieldValue({
                    pid: id
                })
            }, 10)
        })
    }


    private handleVisibleClose = () => {
        this.setState({
            visible: false,
            childVisible: false,
        })
        this.fn && this.fn.cleanFieldValue()
        this.childFn && this.childFn.cleanFieldValue()
    }

    private getChildItems = (fn: IFormFun) => {
        this.childFn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'NULL',
            props: {
                value: '0'
            },
            field: 'pid'
        }, {
            component: 'Input',
            label: <FormLabel>使用者密码</FormLabel>,
            props: {
                type: 'password',
                placeholder: '请输入使用者密码'
            },
            field: 'password'
        }, {
            component: 'Input',
            label: <FormLabel>真实姓名</FormLabel>,
            props: {
                placeholder: '请输入真实姓名'
            },
            field: 'true_name'
        }, {
            component: 'Input',
            label: <FormLabel>使用者手机</FormLabel>,
            props: {
                placeholder: '请输入使用者手机',
                type: 'number'
            },
            field: 'mobile'
        }, {
            component: 'Input',
            label: <FormLabel>身份证</FormLabel>,
            props: {
                placeholder: '请输入身份证',
            },
            field: 'id_card'
        }, {
            component: 'Input',
            label: <FormLabel>支付宝账号</FormLabel>,
            props: {
                placeholder: '请输入支付宝账号',
            },
            field: 'alipay_account'
        }, {
            component: 'Input',
            label: <FormLabel>保证金</FormLabel>,
            props: {
                placeholder: '请输入保证金',
                type: 'number'
            },
            field: 'bond'
        }, {
            component: 'Input',
            label: <FormLabel>利息</FormLabel>,
            props: {
                placeholder: '请输入利息',
                type: 'number'
            },
            field: 'interest'
        }, {
            component: 'Input',
            label: <FormLabel>最小随机数</FormLabel>,
            props: {
                placeholder: '请输入最小随机数0~99',
                max: 99,
                min: 0,
                type: 'number'
            },
            field: 'random_min_num'
        }, {
            component: 'Input',
            label: <FormLabel>最大随机数</FormLabel>,
            props: {
                placeholder: '请输入最大随机数0~99',
                type: 'number',
                max: 99,
                min: 0,
            },
            field: 'random_max_num'
        }]
        return items
    }

    private getItems = (fn: IFormFun) => {
        this.fn = fn
        const items: IFormItem[] = [{
            component: 'NULL',
            field: 'id'
        }, {
            component: 'NULL',
            props: {
                value: '0'
            },
            field: 'pid'
        }, {
            component: 'Upload',
            label: <FormLabel>营业执照</FormLabel>,
            props: {
                // localStorage.getItem('imgUrl') http://mistep-fund.maixiaobu.cn/common/upload
                maxLength: 1,
                baseUrl: localStorage.getItem('imgUrl') + '/',
                action: 'http://mistep-fund.maixiaobu.cn/common/upload',
                method: 'POST',
                name: 'file'
            },
            field: 'business'
        }, {
            component: 'Input',
            label: <FormLabel>使用者密码</FormLabel>,
            props: {
                type: 'password',
                placeholder: '请输入使用者密码'
            },
            field: 'password'
        }, {
            component: 'Input',
            label: <FormLabel>真实姓名</FormLabel>,
            props: {
                placeholder: '请输入真实姓名'
            },
            field: 'true_name'
        }, {
            component: 'Input',
            label: <FormLabel>使用者手机</FormLabel>,
            props: {
                placeholder: '请输入使用者手机',
                type: 'number'
            },
            field: 'mobile'
        }, {
            component: 'Input',
            label: <FormLabel>身份证</FormLabel>,
            props: {
                placeholder: '请输入身份证',
            },
            field: 'id_card'
        }, {
            component: 'Input',
            label: <FormLabel>法人名称</FormLabel>,
            props: {
                placeholder: '请输入法人名称',
            },
            field: 'legal_person_name'
        }, {
            component: 'Input',
            label: <FormLabel>支付宝账号</FormLabel>,
            props: {
                placeholder: '请输入支付宝账号',
            },
            field: 'alipay_account'
        }, {
            component: 'Input',
            label: <FormLabel>保证金</FormLabel>,
            props: {
                placeholder: '请输入保证金',
                type: 'number'
            },
            field: 'bond'
        }, {
            component: 'Input',
            label: <FormLabel>利息</FormLabel>,
            props: {
                placeholder: '请输入利息',
                type: 'number'
            },
            field: 'interest'
        }, {
            component: 'Input',
            label: <FormLabel>最小随机数</FormLabel>,
            props: {
                placeholder: '请输入最小随机数0~99',
                max: 99,
                min: 0,
                type: 'number'
            },
            field: 'random_min_num'
        }, {
            component: 'Input',
            label: <FormLabel>最大随机数</FormLabel>,
            props: {
                placeholder: '请输入最大随机数0~99',
                type: 'number',
                max: 99,
                min: 0,
            },
            field: 'random_max_num'
        }]
        return items
    }

    private handleOk = async () => {
        try {
            if (this.fn) {
                const value = this.fn.getFieldValue()
                if (!value.business) {
                    message.error('请上传营业执照')
                    return
                }
                if (!value.id && !value.password) {
                    message.error('请输入使用者密码')
                    return
                }
                if (!value.true_name) {
                    message.error('请输入真实姓名')
                    return
                }
                if (!value.mobile) {
                    message.error('请输入使用者手机')
                    return
                }
                if (!value.id_card) {
                    message.error('请输入身份证')
                    return
                }
                if (!value.legal_person_name) {
                    message.error('请输入法人名称')
                    return
                }
                if (!value.alipay_account) {
                    message.error('请输入支付宝账号')
                    return
                }
                if (!value.bond) {
                    message.error('请输入保证金')
                    return
                }
                if (!value.interest) {
                    message.error('请输入利息')
                    return
                }
                if (!value.random_min_num) {
                    message.error('请输入最小随机数')
                    return
                }
                if (!value.random_max_num) {
                    message.error('请输入最大随机数')
                    return
                }
                if (value.id) {
                    await http(`merchant-manage/${value.id}`, { ...value }, { method: 'PUT' })
                    message.success('修改商户成功')
                } else {
                    await http('merchant-manage/create', { ...value })
                    message.success('添加商户成功')
                }
                this.setState({
                    visible: false
                })
                this.getData()
            }
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private handleChildOk = async () => {
        try {
            if (this.childFn) {
                const value = this.childFn.getFieldValue()
                if (!value.id && !value.password) {
                    message.error('请输入使用者密码')
                    return
                }
                if (!value.true_name) {
                    message.error('请输入真实姓名')
                    return
                }
                if (!value.mobile) {
                    message.error('请输入使用者手机')
                    return
                }
                if (!value.id_card) {
                    message.error('请输入身份证')
                    return
                }
                if (!value.alipay_account) {
                    message.error('请输入支付宝账号')
                    return
                }
                if (!value.bond) {
                    message.error('请输入保证金')
                    return
                }
                if (!value.interest) {
                    message.error('请输入利息')
                    return
                }
                if (!value.random_min_num) {
                    message.error('请输入最小随机数')
                    return
                }
                if (!value.random_max_num) {
                    message.error('请输入最大随机数')
                    return
                }
                if (value.id) {
                    await http(`merchant-manage/${value.id}`, { ...value }, { method: 'PUT' })
                    message.success('修改下级商户成功')
                } else {
                    await http('merchant-manage/create', { ...value })
                    message.success('添加下级商户成功')
                }
                this.setState({
                    childVisible: false
                })
                this.getData()
            }
        } catch (e) {
            message.error('网络不稳定,请稍后再试')
        }
    }

    private handleAddShop = () => {
        this.setState({
            visible: true
        })
    }

    private handleEdit = (data: any) => {
        this.setState({
            visible: true
        }, () => {
            setTimeout(() => {
                this.fn && this.fn.setFieldValue(data)
            }, 10)
        })
    }

    private handleChildEdit = (data: any) => {
        this.setState({
            childVisible: true
        }, () => {
            setTimeout(() => {
                this.childFn && this.childFn.setFieldValue(data)
            }, 10)
        })
    }

}

export default connect(
    ({ routers, router, jurisd, icons }: IInitState) => ({
        routers,
        router,
        jurisd,
        icons
    })
)(Index)
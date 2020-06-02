import { getUnit } from './../components/lib/utils/index';
import { getRatioUnit } from 'src/components/lib/utils'
import styled, { css, createGlobalStyle } from 'styled-components'
import { Label } from 'src/components'
/** 全局样式DOM */

interface IGlobalViewProps {
    notColor?: boolean
}
export const GlobalStyle = createGlobalStyle`
    .login_int{
        background: transparent;
        margin-top: ${getUnit(20)};

        input {
            border-color: #fff;
            color: #fff;

            &::placeholder {
                color: #fff;
            }
        }
    }
`

export const GlobalView = styled.div<IGlobalViewProps>`
    ${({ notColor }) => {
        if (!notColor) return css`background: #fff; padding: ${getUnit(20)} ${getUnit(30)};`
    }}
    min-height: 100%;
`

export const GlobalForm = styled.div`
    .form_item {
        .l_form_item {
            >div {
                height : ${getUnit(32)};
                border: ${getUnit(1)} solid rgb(232,232,232);
                padding: ${getUnit(5)} 0 0 ${getUnit(10)};
            }
        }
    }
`

export const FormLable = styled.div`
    width: ${getRatioUnit(70)};
`

export const FormRequire = styled(Label)`
     cursor: initial;
`
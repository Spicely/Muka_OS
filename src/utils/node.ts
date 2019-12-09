import { ThemeData, getRatioUnit } from 'src/components/lib/utils'
import styled, { css, createGlobalStyle } from 'styled-components'
import { Label } from 'src/components'
/** 全局样式DOM */

interface IGlobalViewProps {
    notColor?: boolean
}
export const GlobalStyle = createGlobalStyle`
    .login_int{
        background: transparent;
        margin-top: ${() => 20 * ThemeData.ratio + ThemeData.unit};

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
        if (!notColor) return css`background: #fff; padding: ${20 * ThemeData.ratio + ThemeData.unit} ${30 * ThemeData.ratio + ThemeData.unit};`
    }}
    min-height: 100%;
`

export const FormLable = styled.div`
    width: ${getRatioUnit(70)};
`

export const FormRequire = styled(Label)`
     cursor: initial;
`
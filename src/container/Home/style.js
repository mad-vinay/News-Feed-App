import styled from "styled-components";

const Container = styled.div`
    .listStyle {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        justify-content: center;
        li {
            width: 250px;
            padding: 15px;
            margin: 15px;
            border: 1px solid;
            cursor: pointer;
            img {
                width: 100%;
            }
            h4 {
                margin-top: 0;
            }
        }
    }
    .noContentStyle {
        color: red;
    }
`;

const SubContentWrapper = styled.div`
    .featuredListStyle {
        li {
            display: flex;
            padding: 0;
            width: 100%;
            position: relative;
            @media only screen and (max-width: 768px) {
                flex-direction: column;
                align-items: center;
                padding-top: 20px;
            }
            img {
                width: 50%;
            }
            p {
                text-align: left;
            }
            h4 {
                margin-top: 20px;
            }
            span {
                position: absolute;
                right: 20px;
                bottom: 20px;
                font-style: italic;
                font-size: 12px;
                @media only screen and (max-width: 768px) {
                    display: none;
                }
            }
        }
        .imageWrapper {
            padding: 0 15px;
        }
    }
`;
const Styled = {
    Container,
    SubContentWrapper
};

export default Styled;
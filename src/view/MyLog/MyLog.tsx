import Collapsible from "../../component/Collapsible/Collapsible";
import Container from "../../component/Container";
import {TopbarBackButton} from "../../component/Topbar";
import chainSample from "../../assets/chain-sample.png";
import styled from "styled-components";
import ThreadContent from "../../component/Thread/ThreadContent";

const SemiTitle = styled.div`
    font-size : var(--font-size-medium); 
`
const Caption = styled.div`
    font-size : var(--font-size-small); 
    color : var(--placeholder-font);
`;

const ThreadWrap = styled.div`
  margin: 0 var(--min-padding);
`;


export default function MyLog(){
    return (
    <Container>
        <TopbarBackButton title="나와 연결된 오라기"/>
        <Collapsible>
            <img src={chainSample}/>
            <SemiTitle>카드를 클릭해서</SemiTitle>
            <SemiTitle>전체 오라기를 보세요</SemiTitle>
            <Caption>자신이 남긴 글들이</Caption>
            <Caption>어떤 오라기를 만들었는지 되새겨보아요</Caption>
        </Collapsible>
        <ThreadWrap>
            <ThreadContent content={"Hello"}></ThreadContent>
        </ThreadWrap>
    </Container>
    );
}
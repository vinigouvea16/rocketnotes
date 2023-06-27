import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
      <li><ButtonText title="Todos" /></li>
      <li><ButtonText title="React" /></li>
      <li><ButtonText title="Nodejs" /></li>
      </Menu>

      <Search>
      <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
      <Section title="Minhas notas">
      <Note data={{
        title: 'React', 
        tags: [
          {id: '1', name: 'javascript'},
          {id: '2', name: 'nodejs'},
          {id: '3', name: 'react'}
        ]
        }}
        />

      </Section>
      </Content>

      <NewNote to="/new">
      <FiPlus />
        Criar nota
    
      </NewNote>

    </Container>
  );
}
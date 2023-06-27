import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details(){

  return(
    <Container>
      <Header />
      <main>
        <Content>
         

      <ButtonText title="Excluir Nota"/>

      <h1>
        Introdução ao React
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, deserunt inventore omnis odit, ipsa obcaecati totam dolorum, doloremque debitis ullam officia exercitationem nostrum! Et non, doloribus incidunt quis unde dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati rem deserunt recusandae cum corrupti, sint deleniti aperiam, aspernatur neque sed culpa natus fugiat repudiandae eaque! Facilis quaerat ipsam quasi!</p>

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
      <Tag title="express"/>
      <Tag title="nodejs"/>
      
      </Section>

      <Button title="Voltar" />
      </Content>
      </main>
    </Container>
  )
}
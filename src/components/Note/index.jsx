/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Tag } from "../Tag";
// eslint-disable-next-line react/prop-types
export function Note({ data, onClick, ...rest }){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} 
            onClick={onClick}
            />)
          }
        </footer>
      }
    </Container>
  );
}
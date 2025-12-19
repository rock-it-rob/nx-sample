import { Container } from '@nx-sample/components';

export default function IndexPage() {
  return (
    <Container>
      <h1>Apps</h1>
      <ul>
        <li>sample-ui</li>
      </ul>
      <h1>Libs</h1>
      <ul>
        <li>components</li>
        <li>dates</li>
      </ul>
    </Container>
  );
}

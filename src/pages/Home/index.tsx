import Card from '../../components/Card';
import HoverLink from '../../components/HoverLink';
import { Content, GrayCard, StyledApp } from './HomeElements';

/* Graphql */
import { useQuery } from '../../generated/graphql';

const Home = () => {
  const { data, error, loading } = useQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <Content>
      <StyledApp>
        {data.characters &&
          data.characters.results &&
          data.characters.results.map((result, resultIndex) =>
            result && resultIndex % 2 === 0 ? (
              <Card
                key={`card_result_${resultIndex}`}
                title={result.name}
                text={result.species}
                url={result.image}
                imageUrl={result.image}
              />
            ) : (
              result && (
                <GrayCard
                  key={`card_result_${resultIndex}`}
                  title={result.name}
                  text={result.species}
                  url={result.image}
                  imageUrl={result.image}
                />
              )
            )
          )}
      </StyledApp>

      <HoverLink label="Hovering my parent changes my style!" />
    </Content>
  );
};

export default Home;

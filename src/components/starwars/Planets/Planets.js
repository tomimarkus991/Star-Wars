import React, { useContext, Fragment } from "react";
import { usePaginatedQuery } from "react-query";
import StarwarsContext from "../../../contexts/starwars/starwarsContext";
import Spinner from "../../layout/Spinner";
import Planet from "./Planet";
import { Button } from "react-bootstrap";

const Planets = () => {
  const { getPlanets, planetsPage, setPlanetsPage } = useContext(
    StarwarsContext
  );
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planets", planetsPage],
    getPlanets
  );
  return (
    <div className="content">
      <h2>Planets</h2>
      {status === "loading" && <Spinner />}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <Fragment>
          <Button
            onClick={() => setPlanetsPage((old) => Math.max(old - 1, 1))}
            disabled={planetsPage === 1}
          >
            Prev. Page
          </Button>
          <span>{planetsPage}</span>
          <Button
            onClick={() =>
              setPlanetsPage((old) =>
                !latestData || !latestData.next ? old : old + 1
              )
            }
            disabled={!latestData || !latestData.next}
          >
            Next Page
          </Button>
          <div>
            {resolvedData.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Planets;

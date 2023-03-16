import { CatalogItem } from "./CatalogItme/CatalogItem";

export const Catalog = ({
    games,
}) => {

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.map(game => <CatalogItem key={game._id} {...game} />)}

            <h3 className="no-articles">No articles yet</h3>
        </section>
    );
};
import PicturesDisplay from '@/app/page';

const SearchResults = ({ params }: { params: { request: string } }) => {
    return <PicturesDisplay request={params.request} />;
};

export default SearchResults;

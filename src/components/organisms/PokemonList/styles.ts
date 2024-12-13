import { styled } from '@macaron-css/solid';

const Container = styled('ul', {
    base: {
        listStyle: 'none',
        padding: '0 !important',
        margin: '0 !important',
    },
});

const ListItem = styled('li', {
    base: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #efefef',
        padding: '5px 15px',
    },
})

const CharacterName = styled('span', {
    base: {
        width: '135px',
        paddingLeft: '30px',
    },
});

const ThumbnailContainer = styled('figure', {
    base: {
        margin: '0 !important',
    },
})

export {
    Container,
    ListItem,
    CharacterName,
    ThumbnailContainer,
};
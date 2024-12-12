import { styled } from '@macaron-css/solid';

const Container = styled('ul', {
    base: {
        listStyle: 'none',
        paddingLeft: '20px !important',
    },
});

const ListItem = styled('li', {
    base: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #efefef',
    },
})

const CharacterName = styled('span', {
    base: {
        width: '135px',
        paddingLeft: '30px',
    },
});

export {
    Container,
    ListItem,
    CharacterName,
};
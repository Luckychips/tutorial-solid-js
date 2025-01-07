import { styled } from '@macaron-css/solid';

const Container = styled('ul', {
    base: {
        listStyle: 'none',
        padding: '0 !important',
        margin: '0 !important',
    },
});

const Item = styled('li', {
    base: {
        width: '100vw',
        display: 'inline-flex',
        padding: '5px',
    },
});

const Figure = styled('figure', {
    base: {

    }
});

const FigureCaption = styled('figure', {
    base: {
        width: '60vw',
    },
})

const Title = styled('h3', {
    base: {
        cursor: 'pointer',
        margin: '0 !important',
        paddingBottom: '5px',
    },
    variants: {
        closed: {
            true: {
                textDecoration: 'line-through'
            }
        }
    }
});

const Employment = styled('span', {

});

const Role = styled('h5', {
    base: {
        padding: '0 !important',
        margin: '0 !important',
    }
});

const Description = styled('p', {
    base: {
        fontSize: '0.75rem',
        lineHeight: '1.2rem',
    }
});

const Projects = styled('ul', {
    base: {
        paddingLeft: '15px !important',
    }
});

const ProjectItem = styled('li', {
    base: {
        fontSize: '0.7rem',
    }
});

const TagContainer = styled('div', {
    base: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        paddingTop: '7.5px',
    },
});

const SkillTag = styled('span', {
    base: {
        fontSize: '0.7rem',
        marginRight: '7.5px',
        marginBottom: '5px',
        border: '1px solid',
        borderRadius: '5px',
        padding: '2.5px 5px',
    },
})

export {
    Container,
    Item,
    Figure,
    FigureCaption,
    Title,
    Employment,
    Role,
    Description,
    Projects,
    ProjectItem,
    TagContainer,
    SkillTag,
};

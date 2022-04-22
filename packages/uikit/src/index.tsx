interface Props {
    name: string,
    content: string
}

export const Panel = ( {name, content}: Props) => {
    return <div>
        <div>{name}</div>
        <div>{content}</div>
    </div>
}
export default function TitleBlock(props) {
    const SubTitle = () => {
        if (props.subtitle) {
            return (<h4>{props.subtitle}</h4>)
        }
    }

    const Title = () => {
        if (props.title) {
            return (<h2>{props.title}</h2>)
        }
    }

    const titleClass = (props.extraClasses) ? props.extraClasses : ''

    return (

        <div className={'title-block ' + titleClass}>
            <SubTitle />
            <Title />
        </div>
    )
}
type Props = {
    fails?: number;
};

export const PictureHanged = (props: Props) => {
    const { fails = 0 } = props;

    const urlImg = `../images/hanged/${fails > 5 ? '5' : fails}.webp`;

    return <img src={urlImg} alt='Picture Hanged' />;
};

export default PictureHanged;


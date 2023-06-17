type Props = {
    fails?: number;
};

export const PictureHanged = (props: Props) => {
    const { fails = 0 } = props;

    return <img src={`src/assets/hanged/${fails > 5 ? '5' : fails}.webp`} alt='Picture Hanged' />;
};

export default PictureHanged;


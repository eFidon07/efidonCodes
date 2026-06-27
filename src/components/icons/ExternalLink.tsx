const ExternalLink = (props: { fillClass?: string }) => {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.456 3.16165L1.35906 3.16165L1.35908 0.500023L16 0.5L16 15.1409L13.3384 15.1409L13.3384 5.044L1.88235 16.5L0 14.6176L11.456 3.16165Z"
        className={props.fillClass || "fill-white"}
      />
    </svg>
  );
};

export default ExternalLink;

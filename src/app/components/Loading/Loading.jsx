import { InfinitySpin } from "react-loader-spinner";
const Loading = ({ width }) => {
  return (
    <InfinitySpin
      visible={true}
      width={width}
      color="#FF007A"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loading;

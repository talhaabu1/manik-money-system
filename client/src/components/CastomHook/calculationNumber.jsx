import { useEffect } from "react";
import { useTractorGetTotalDetailsQuery } from "../../features/api/queryApi";
import { useState } from "react";

export const sumTotalNumber = (reducer) => {
  //? tractor details ⤵
  const { data } = useTractorGetTotalDetailsQuery();
  //? tractor details ⤴

  //? calculation result ⤵
  const [result, setResult] = useState();
  //? calculation result ⤴

  useEffect(() => {
    const sumTotalNumber = data?.data?.reduce(reducer, 0);
    setResult(sumTotalNumber);
  }, [reducer]);

  return result;
};

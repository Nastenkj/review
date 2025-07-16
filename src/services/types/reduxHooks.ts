import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/types";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch();

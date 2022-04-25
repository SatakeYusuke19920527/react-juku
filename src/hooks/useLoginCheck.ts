import { useEffect } from 'react';
import { auth } from '../plugins/firebase';
import { login, logout, selectUser } from '../features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useRTK';
import { UserType } from '../types/UserType';

export const useLoginCheck = (): boolean => {
  const user: UserType = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unSub();
    };
  }, [dispatch]);
  return user.uid !== ""
};
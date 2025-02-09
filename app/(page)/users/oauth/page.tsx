"use client"

import { useEffect } from 'react';
import { useAppDispatch } from '@/lib/store';
import { loginService } from '@/app/service/user/login.service';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/app/components/common/status/LoadingSpinner';

const OauthCallback = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("OAuth 콜백 실행 중...");

        try {
            router.push("/users/oauth/success"); // 성공 시 리디렉션할 경로
        } catch (error) {
            console.error("OAuth 처리 중 오류:", error);
            router.push("/login"); // 오류 발생 시 로그인 페이지로 이동
        }
    }, [dispatch]);
    return <LoadingSpinner />
};

export default OauthCallback;
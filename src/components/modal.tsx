"use client"

import style from "./modal.module.css"
import { ReactNode, useRef, useEffect } from "react"
import {createPortal } from "react-dom"
import {useRouter} from "next/navigation"

export default function Modal ({children}:{children:ReactNode}) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const router = useRouter();

    useEffect(() => {
        if(!dialogRef.current?.open) {
            dialogRef.current?.showModal();
            dialogRef.current?.scrollTo({
                top:0,
            });

        }
    }, [])

    return createPortal(
        <dialog 
            className={style.modal} 
            ref={dialogRef} 
            onClick={(e) => {
                //모달의 배경이 클릭 => 뒤로가기
                // 아직은 ts에서 dialog 태그에서 onclick이벤트 시 nodeName을 지원하지 않는다.
                if((e.target as any).nodeName === 'DIALOG') {
                    router.back()
                }
            }}
            //esc 버튼을 누르면 모달 뒤로가기
            onClose={() => router.back()}
        >
            {children}
        </dialog>, 
        document.getElementById("modal-root") as HTMLElement
    )
}
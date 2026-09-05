"use client"
import styles from "./AddVideoScreen.module.css"
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {VideoInterface} from "@/app/api/add_video/route";

export default function AddVideoScreen () {
    const onSubmit = (video: VideoInterface) => {
        console.log(video);
    }
    const onError=()=>{
        alert("mistake")
    }
    const method = useForm<VideoInterface>({
        defaultValues:{link:""}
    })
    const {register, reset, watch, handleSubmit} = method
    const videoValue = watch("link")
    useEffect(() => {
        console.log("videoValue",videoValue)
    }, [videoValue]);
    return (
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit,onError)}>
                    <div className={styles.inputWrapper}>
                        <span className={styles.icon}>🔍</span>
                        <input
                            {...register("link")}
                            type="text"
                            className={styles.input}
                            aria-label="Поиск"
                        />
                        {String(videoValue).trim().length > 0 && (<button
                            type="button"
                            className={styles.clearButton}
                            onClick={() => reset()}
                            aria-label="Очистить"
                        >
                            ✕
                        </button>)}


                    </div>
                    <button
                        type="submit"
                        className={styles.button}
                        disabled={!String(videoValue).trim()}
                    >
                        <span>Найти</span>
                    </button>
                </form>
            </div>
    );
}

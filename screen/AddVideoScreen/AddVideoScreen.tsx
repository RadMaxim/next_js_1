"use client"
import styles from "./AddVideoScreen.module.css"
import { useForm } from "react-hook-form"
import { VideoInterface } from "@/app/api/videos/route"

export default function AddVideoScreen() {

    const { register, reset, watch, handleSubmit, formState: { errors } } = useForm<VideoInterface>({
        defaultValues: { link: "" }
    })

    const videoValue = watch("link")
    const onSubmit = async (video: VideoInterface) => {
            const response = await fetch("/api/videos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(video)
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || "Ошибка при добавлении видео")
            }

            const data = await response.json()
            console.log("✅ Успешно добавлено:", data)

            reset() // Очищаем форму



    }

    const onError = () => {
        alert("Ошибка валидации формы")
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
                <div className={styles.inputWrapper}>
                    <span className={styles.icon}>🔍</span>
                    <input
                        {...register("link", {
                            required: "Ссылка обязательна",

                        })}
                        type="text"
                        className={styles.input}
                        placeholder="Введите ссылку на видео..."
                        aria-label="Ссылка на видео"
                    />
                    {String(videoValue).trim().length > 0 && (
                        <button
                            type="button"
                            className={styles.clearButton}
                            onClick={() => reset({ link: "" })}
                            aria-label="Очистить"
                        >
                            ✕
                        </button>
                    )}
                </div>

                {errors.link && (
                    <div className={styles.errorMessage}>
                        ❌ {errors.link.message}
                    </div>
                )}

                <button
                    type="submit"
                    className={`${styles.button}`}
                >
                    { "➕ Добавить видео"}
                </button>
            </form>
        </div>
    )
}
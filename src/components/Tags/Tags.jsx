import s from "./style.module.css";

export function Tags({ tags }) {
    return (
        <div className={s.tags_container}>
            {tags.map((tag, index) => (
                <span key={index} className={s.tag}>
                    {tag}
                </span>
            ))}
        </div>
    );
}

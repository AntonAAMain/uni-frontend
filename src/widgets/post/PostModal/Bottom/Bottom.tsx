import { useProfilePostModalStore } from "@/shared/zustand/profile/useProfilePostModal";
import cls from "./Bottom.module.scss";
import { apiBase } from "@/shared/http";

export const Bottom = () => {
  const { mode, text, submitHandle } = useProfilePostModalStore();

  const test2 = `one this. two`;

  const test3 = "one this.\ntwo";

  const test = async () => {
    console.log(text);

    // console.log(text.split("\n").join("\\n"));
    // console.log(test3.split("\n").join("\n")); // ЭТО РАБОТАЕТ ДЛЯ ВЫВОДА ТЕКСТА
    // apiBase.post("/profile/post", {
    //   title: "my test title",
    //   text: "my test text.\nHello\nHello2",
    //   user_id: 1,
    // });
    // apiBase.get("/profile/posts");
  };

  return (
    <div className={cls.container}>
      {mode === "edit" && (
        <>
          <div>likes</div>

          <div>dislikes</div>

          <div>date</div>
        </>
      )}

      <div onClick={submitHandle} className={cls.button}>
        {mode === "create" ? "Создать" : "Изменить"}
      </div>
    </div>
  );
};

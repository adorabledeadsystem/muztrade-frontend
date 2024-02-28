import React from "react";
import upload from "../../../assets/upload.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../../../axios";
import basket from "../../../assets/basket.svg";

export default function EditPhoto() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [summary, setSummary] = React.useState("");
  const [date, setDate] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  const uploadFile = React.useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (error) {
      console.warn(error);
      alert("Ошибка");
    }
  };

  const onClickRemove = () => {
    setImageUrl("");
  };

  const onSubmit = async () => {
    try {
      const fields = {
        summary,
        date,
        imageUrl,
      };
      const { data } = await axios.patch(`/photos/${id}`, fields);
      const _id = id;
      alert("Изменения сохранены");
      navigate(`/photos/${id}`);
    } catch (error) {
      console.warn(error);
      alert("Ошибка редактирования картинки!");
    }
  };

  React.useEffect(() => {
    axios
      .get(`/photos/${id}`)
      .then(({ data }) => {
        setImageUrl(data.imageUrl);
        setSummary(data.summary);
        setDate(data.date);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении картинки!");
      });
  }, []);

  return (
    <>
      <div className="createWrapper">
        <h1>Редактирование картинки</h1>
        <div className="createUp">
          <div className="upload">
            {imageUrl ? (
              <>
                <div className="fileUpl">
                  <img
                    src={"https://api.muztrade.com:4444" + imageUrl}
                    alt="Upload"
                    className="uploadImg"
                  />
                  <button className="deleteImg">
                    <img
                      src={basket}
                      alt="basket"
                      width={50}
                      height={50}
                      onClick={onClickRemove}
                    />
                  </button>
                </div>
              </>
            ) : (
              <>
                <img
                  src={upload}
                  alt="upload"
                  width={120}
                  height={120}
                  onClick={() => uploadFile.current.click()}
                />
                <input
                  type="file"
                  ref={uploadFile}
                  style={{ visibility: "hidden" }}
                  onChange={handleChangeFile}
                />
                <p> Выберите файл из проводника для загрузки</p>
              </>
            )}
          </div>
          <textarea
            rows="10"
            placeholder="Краткое описание"
            className="summaryInput"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>

        <div className="createBottom_ph">
          <form className="titleContainer_ph">
            <input
              className="dateInput_ph"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <div className="bottomButtons_ph">
              <button className="createAdminBtn_ph" onClick={onSubmit} ы>
                Сохранить
              </button>
              <Link to={"/photos"}>
                <button className="cancelAdminBtn_ph"> Выйти </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

import React from "react";
import upload from "../../../assets/upload.svg";
import axios from "../../../axios";
import basket from "../../../assets/basket.svg";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { selectIsAuth } from "../../../redux/slices/auth";
import { useSelector } from "react-redux";

export default function CreatePhoto() {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  const [loading, setLoading] = React.useState(false);

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
      setLoading(true);
      const fields = {
        summary,
        date,
        imageUrl,
      };
      const { data } = await axios.post("/photos", fields);
      navigate(`/photos`);
    } catch (error) {
      console.warn(error);
      alert("Ошибка создания картинки!");
    }
  };

  // if (!isAuth) {
  //   return <Navigate to="/admin" />;
  // }

  return (
    <>
      <div className="createWrapper">
        <h1>Создание картинки</h1>
        <div className="createUp">
          <div className="upload">
            <div className="upload">
              {imageUrl ? (
                <>
                  <div className="fileUpl">
                    <img
                      src={'https://api.muztrade.com:4444' + imageUrl}
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
              <button className="createAdminBtn_ph" onClick={onSubmit}>
                Создать
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

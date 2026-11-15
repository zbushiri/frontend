import { useState } from "react";
import axios from "axios";
import "./AnimeForm.css";

const emptyForm = {
  title: "",
  genre: "",
  year: "",
  description: ""
};

/** Adds an anime to the shelf. */
const AnimeForm = (props) => {
  const [form, setForm] = useState(emptyForm);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  /* Checks the same rules as the server */
  const validate = () => {
    if (form.title.trim().length < 2 || form.title.trim().length > 60) return "Enter a title between 2 and 60 characters.";
    if (form.genre.trim().length < 2 || form.genre.trim().length > 40) return "Enter a genre between 2 and 40 characters.";
    if (!Number.isInteger(Number(form.year)) || form.year < 1900 || form.year > 2100) return "Enter a valid release year.";
    if (form.description.trim().length < 10 || form.description.trim().length > 300) return "Enter a description between 10 and 300 characters.";
    if (image && !image.type.startsWith("image/")) return "Please choose an image file.";
    return "";
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const formError = validate();

    if (formError) {
      setSuccess(false);
      setMessage(formError);
      return;
    }

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (image) data.append("image", image);

    try {
      const response = await axios.post(`${props.server}/api/anime`, data);
      props.onAdd(response.data);
      setForm(emptyForm);
      setImage(null);
      setSuccess(true);
      setMessage("Anime added to the shelf.");
      event.target.reset();
    } catch (error) {
      setSuccess(false);
      if (error.response && error.response.data) {
        setMessage(error.response.data.error);
      } else {
        setMessage("Anime could not be added.");
      }
    }
  };

  return (
    <section className="anime-form-section">
      <h2>Add an Anime</h2>
      <form className="anime-form" onSubmit={submitForm}>
        <label>Title<input name="title" value={form.title} onChange={changeForm} required /></label>
        <label>Genre<input name="genre" value={form.genre} onChange={changeForm} required /></label>
        <label>Release Year<input name="year" type="number" min="1900" max="2100" value={form.year} onChange={changeForm} required /></label>
        <label className="wide-field">Description<textarea name="description" minLength="10" maxLength="300" value={form.description} onChange={changeForm} required /></label>
        <label className="wide-field">Image (optional)<input type="file" accept="image/*" onChange={(event) => setImage(event.target.files[0])} /></label>
        <button className="button" type="submit">Add to Shelf</button>
        {message && <p className={success ? "form-success" : "form-error"}>{message}</p>}
      </form>
    </section>
  );
};

export default AnimeForm;

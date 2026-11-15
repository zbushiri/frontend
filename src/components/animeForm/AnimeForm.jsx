import { useState } from "react";
import axios from "axios";
import "./AnimeForm.css";

/* Blank form values */
const emptyForm = {
  title: "",
  genre: "",
  year: "",
  description: ""
};

/** Adds an anime to the shelf. */
const AnimeForm = (props) => {
  /* Stores form values, the image, and the result message */
  const [form, setForm] = useState(emptyForm);
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  /* Updates the field the user changed */
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
    /* Keeps the form on the same page */
    event.preventDefault();
    const formError = validate();

    if (formError) {
      /* Shows client validation errors */
      setSuccess(false);
      setMessage(formError);
      return;
    }

    /* Packages text and the optional image for the server */
    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (image) data.append("image", image);

    try {
      /* Sends the new anime to the server */
      const response = await axios.post(`${props.server}/api/anime`, data);

      /* Adds the response to the shelf and clears the form */
      props.onAdd(response.data);
      setForm(emptyForm);
      setImage(null);
      setSuccess(true);
      setMessage("Anime added to the shelf.");
      event.target.reset();
    } catch (error) {
      /* Shows the server error without leaving the page */
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
      {/* Anime information form */}
      <form className="anime-form" onSubmit={submitForm}>
        <label>Title<input name="title" value={form.title} onChange={changeForm} required /></label>
        <label>Genre<input name="genre" value={form.genre} onChange={changeForm} required /></label>
        <label>Release Year<input name="year" type="number" min="1900" max="2100" value={form.year} onChange={changeForm} required /></label>
        <label className="wide-field">Description<textarea name="description" minLength="10" maxLength="300" value={form.description} onChange={changeForm} required /></label>
        <label className="wide-field">Image (optional)<input type="file" accept="image/*" onChange={(event) => setImage(event.target.files[0])} /></label>
        <button className="button" type="submit">Add to Shelf</button>
        {/* Success or error message */}
        {message && <p className={success ? "form-success" : "form-error"}>{message}</p>}
      </form>
    </section>
  );
};

export default AnimeForm;

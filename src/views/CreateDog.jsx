import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './CreateDog.module.css';
import { postDog, getTemperament } from '../redux/actions';
import validate from '../containers/CreateValidate';

export const CreateDog = () => {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state.temperamentsArr);
  const [errors, setErrors] = useState({});
  const [success] = useState(false);
  const [input, setInput] = useState({
    name: '',
    heightMin: '',
    heightMax: '',
    weightMin: '',
    weightMax: '',
    expectativaDeVida: '',
    imagen: '',
    temperamento: [],
  });

  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (!input.temperamento.includes(e.target.value)) {
      setInput({
        ...input,
        temperamento: [...input.temperamento, e.target.value],
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (Object.values(input).some((value) => value === '')) {
        throw new Error('Please fill out all fields');
      }
      const { heightMin, heightMax, weightMin, weightMax } = input;
      if (input.temperamento.length === 0) {
        return alert('TEMPERAMENTS MUST BE SELECTED');
      }
      const parsedHeightMin = parseInt(heightMin, 10);
      const parsedHeightMax = parseInt(heightMax, 10);
      const parsedWeightMin = parseInt(weightMin, 10);
      const parsedWeightMax = parseInt(weightMax, 10);
      if (
        parsedHeightMin >= parsedHeightMax ||
        parsedWeightMin >= parsedWeightMax
      ) {
        return alert(
          'CHECK HEIGTHS OR WEIGHTS, MINS MUST BE MAYORS THAN HIGHS'
        );
      }

      dispatch(postDog(input));
      console.log(input);
      // alert('Dog Created Success');
      setInput({
        name: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        expectativaDeVida: '',
        imagen: '',
        temperamento: [],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  function handleDelete(e) {
    setInput({
      ...input,
      temperamento: input.temperamento.filter((temp) => temp !== e),
    });
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1 className={style.h1}>Create Your Dog</h1>
        <div className={style.super}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={style.span}>
              <label>
                <strong className={style.text1}>Breed Name: </strong>
              </label>
              <input
                type='text'
                value={input.name}
                name='name'
                onChange={(e) => handleChange(e)}
                className='small-input'
              />
              {errors.name && <p className='error'>{errors.name}</p>}
            </div>
            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Minimum Height: </strong>
              </label>
              <input
                type='number'
                value={input.heightMin}
                name='heightMin'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong className={style.text1}> cm</strong>
              </label>
              {errors.heightMin && <p className='error'>{errors.heightMin}</p>}
            </div>

            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Maximum Height: </strong>
              </label>
              <input
                type='number'
                value={input.heightMax}
                name='heightMax'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong className={style.text1}> cm</strong>
              </label>
              {errors.heightMax && <p className='error'>{errors.heightMax}</p>}
            </div>

            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Minimum Weight: </strong>
              </label>
              <input
                type='number'
                value={input.weightMin}
                name='weightMin'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong className={style.text1}> Kg</strong>
              </label>
              {errors.weightMin && <p className='error'>{errors.weightMin}</p>}
            </div>

            <div>
              <label className={style.Lab}>
                <strong className={style.text1}>Maximum Weight: </strong>
              </label>
              <input
                type='number'
                value={input.weightMax}
                name='weightMax'
                onChange={(e) => handleChange(e)}
              />
              <label>
                <strong className={style.text1}> Kg</strong>
              </label>
              {errors.weightMax && <p className='error'>{errors.weightMax}</p>}
            </div>

            <div className={style.span}>
              <label>
                <strong className={style.text1}>Life Span:</strong>
              </label>
              <input
                type='number'
                value={input.expectativaDeVida}
                name='expectativaDeVida'
                onChange={(e) => handleChange(e)}
                className='small-input'
              />
              <label>
                <strong className={style.text1}></strong>
              </label>
              {errors.expectativaDeVida && (
                <p className='error'>{errors.expectativaDeVida}</p>
              )}
            </div>

            <div className={style.span}>
              <label className={style.Lab}>
                <strong className={style.text1}>Image: </strong>
              </label>
              <input
                type='text'
                value={input.imagen}
                name='imagen'
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className={style.span}>
              <select onChange={(e) => handleSelect(e)}>
                <option className={style.text1} value='selected' hidden>
                  Temperaments
                </option>
                {allTemperaments
                  ?.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  })
                  .map((temp) => {
                    return (
                      <option value={temp.name} key={temp.id}>
                        {temp.name}
                        {errors.temperamento && (
                          <p className='error'>{errors.temperamento}</p>
                        )}
                      </option>
                    );
                  })}
              </select>
              {input.temperamento.map((e) => {
                return (
                  <ul className='allSelecction' key={e}>
                    <li>
                      <p className='selecction'>
                        <strong>{e}</strong>
                      </p>
                      <button
                        onClick={() => handleDelete(e)}
                        className={style.x}
                      >
                        X
                      </button>
                    </li>
                  </ul>
                );
              })}
            </div>
          </form>
        </div>

        <div>
          <button className={style.btnDog} type='submit'>
            CREATE YOUR DOGGIE!!
          </button>
        </div>

        <Link to='/home'>
          <button className={style.btnDog2}>Back To Home</button>
        </Link>
      </form>

      {success ? <h2>Created Successfully</h2> : null}
    </div>
  );
};

export default CreateDog;

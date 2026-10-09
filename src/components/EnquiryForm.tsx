import { fieldId, formFor, inputType, isSelect, isTextarea } from '../data/forms';
import { BookingPanel } from './BookingPanel';

/** The per-landing enquiry form. Submission is handled by enquiry.js against
 *  the client-side API installed in src/lib/enquiry.ts. */
export function EnquiryForm({ slug }: { slug: string }) {
  const form = formFor(slug);
  if (!form) return null;

  return (
    <section className="wrap lp-block" id="enquire">
      <div className="section-head">
        <h2 className="section-title">{form.title}</h2>
        <p className="section-note">{form.blurb}</p>
      </div>
      <form className="lp-form" action="/api/enquiry" method="post" data-enquiry>
        <input type="hidden" name="page" value={slug} />
        <input type="hidden" name="form" value={form.id} />
        <p className="lp-form__hp">
          <label htmlFor={`${slug}-hp`}>Leave this field empty</label>
          <input
            id={`${slug}-hp`}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </p>

        <BookingPanel slug={slug} />

        <div className="lp-form__grid">
          {form.fields.map((field) => {
            const id = fieldId(field, slug);
            return (
              <div key={field.name} className={`field${field.wide ? ' field--wide' : ''}`}>
                <label className="field__label" htmlFor={id}>
                  {field.label}
                  {field.required ? (
                    <>
                      {' '}
                      <span className="field__req" aria-hidden="true">
                        *
                      </span>
                    </>
                  ) : null}
                </label>
                {isSelect(field.kind) ? (
                  <select
                    className="field__input"
                    id={id}
                    name={field.name}
                    required={field.required || undefined}
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : isTextarea(field.kind) ? (
                  <textarea
                    className="field__input"
                    id={id}
                    name={field.name}
                    placeholder={field.placeholder}
                    maxLength={field.max}
                    required={field.required || undefined}
                  />
                ) : (
                  <input
                    className="field__input"
                    type={inputType(field.kind)}
                    id={id}
                    name={field.name}
                    placeholder={field.placeholder}
                    autoComplete={field.autocomplete}
                    maxLength={field.max}
                    required={field.required || undefined}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="lp-form__foot">
          <button className="btn btn--accent" type="submit">
            {form.submit}
          </button>
          <p className="lp-form__note">{form.note}</p>
        </div>
        <p className="lp-form__status" data-form-status tabIndex={-1} role="status" aria-live="polite" hidden />
      </form>
    </section>
  );
}

import { bookingFor, monthsFor } from '../data/booking';

/** The "step one" picker that sits above each enquiry form. Choices are
 *  written into the form below by the delegated booking.js handlers. */
export function BookingPanel({ slug }: { slug: string }) {
  const booking = bookingFor(slug);
  if (!booking) return null;
  const months = monthsFor(booking);

  return (
    <div className={`bk bk--${booking.flavor}`} id={booking.id} data-booking>
      <header className="bk__head">
        <p className="bk__kicker">{booking.kicker}</p>
        <h3 className="bk__title">{booking.title}</h3>
        <p className="bk__lede">{booking.lede}</p>
      </header>

      {booking.rail.length > 0 ? (
        <ol className="bk__rail">
          {booking.rail.map(([n, text]) => (
            <li key={n} className="bk__rail-item">
              <span className="bk__rail-n">{n}</span>
              {text}
            </li>
          ))}
        </ol>
      ) : null}

      {months.length > 0 ? (
        <div className="bk-cal" data-bk-cal data-bk-field={booking.dateField}>
          <div className="bk-cal__dows" aria-hidden="true">
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
            <span>Su</span>
          </div>
          {months.map((month) => (
            <div key={month.title} className="bk-cal__month">
              <p className="bk-cal__title">{month.title}</p>
              <div className="bk-cal__grid">
                {month.slots.map((slot, i) =>
                  slot ? (
                    <button
                      key={i}
                      type="button"
                      className={`bk-day${slot.available ? ' is-open' : ''}`}
                      data-bk-day
                      data-bk-value={slot.iso}
                      {...(slot.available
                        ? { 'aria-pressed': 'false' }
                        : { disabled: true, 'aria-disabled': 'true' })}
                    >
                      <span className="bk-day__n">{slot.dom}</span>
                      {slot.note ? <span className="bk-day__note">{slot.note}</span> : null}
                    </button>
                  ) : (
                    <span key={i} className="bk-day bk-day--pad" aria-hidden="true" />
                  ),
                )}
              </div>
            </div>
          ))}
          {booking.dateNote ? <p className="bk-cal__note">{booking.dateNote}</p> : null}
          <p className="bk-cal__picked" data-bk-picked data-bk-for={booking.dateField}>
            No day picked yet.
          </p>
        </div>
      ) : null}

      {booking.groups.map((group) => (
        <fieldset
          key={group.field}
          className={`bk-group bk-group--${group.style}`}
          data-bk-group
          data-bk-field={group.field}
        >
          <legend className="bk-group__legend">{group.legend}</legend>
          <div className="bk-group__opts">
            {group.choices.map((choice) => (
              <button
                key={choice.value}
                type="button"
                className="bk-opt"
                data-bk-opt
                data-bk-value={choice.value}
                aria-pressed="false"
              >
                <span className="bk-opt__label">{choice.label}</span>
                {choice.note ? <span className="bk-opt__note">{choice.note}</span> : null}
              </button>
            ))}
          </div>
        </fieldset>
      ))}

      {booking.steppers.map((step) => (
        <div
          key={step.field}
          className="bk-step"
          data-bk-step
          data-bk-field={step.field}
          data-bk-min={step.min}
          data-bk-max={step.max}
          data-bk-start={step.start}
        >
          <span className="bk-step__label">{step.label}</span>
          <div className="bk-step__ctrl">
            <button
              type="button"
              className="bk-step__btn"
              data-bk-dec
              aria-label={`Fewer ${step.unit}`}
            >
              &minus;
            </button>
            <output className="bk-step__out" data-bk-out>
              {step.start}
            </output>
            <button
              type="button"
              className="bk-step__btn"
              data-bk-inc
              aria-label={`More ${step.unit}`}
            >
              +
            </button>
          </div>
          <span className="bk-step__unit">{step.unit}</span>
        </div>
      ))}

      <p
        className="bk__summary is-empty"
        data-bk-summary
        data-bk-empty="Nothing chosen yet — pick above and it lands in the form below."
      >
        Nothing chosen yet — pick above and it lands in the form below.
      </p>
      {booking.foot ? <p className="bk__foot">{booking.foot}</p> : null}
    </div>
  );
}

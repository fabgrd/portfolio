import React from 'react'
type Props = {}

const CalendlyCalendar = (props: Props) => {
  return (
    <div className='z-[150] h-full'>
      <div className="calendly-inline-widget" data-url="https://calendly.com/fabien-giraudier-epitech/45mn?background_color=000000&text_color=ffffff&primary_color=00fff4" style={{ minWidth: '100%', minHeight: '100%', height: '80vh' }}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </div>
  )
}

export default CalendlyCalendar
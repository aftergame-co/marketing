import { Container } from '@/components/Container'

export function FaqSection({ content }) {
  return (
    <section
      id={content.title}
      aria-labelledby={content.title}
      className="border-t border-gray-200 py-16 sm:py-16 sm:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl lg:mx-0">
          {content.title && (
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              {content.title}
            </h2>
          )}
          {content.subtitle && (
            <p className="mt-2 text-lg text-gray-600">
              {content.subtitle}
            </p>
          )}
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-y-16 gap-x-16 lg:gap-x-24 sm:mt-16 lg:max-w-none md:grid-cols-2"
        >
          {content.questions.map((question, questionIndex) => (
            <li key={questionIndex}>
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                {question.question}
              </h3>
              <p className="mt-4 text-sm text-gray-700 text-justify">{question.answer}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

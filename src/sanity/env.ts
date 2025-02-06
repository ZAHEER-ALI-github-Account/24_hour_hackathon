export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk0IeGj29pejd9FGcMoiZS38engYmbzn023mbJYGfthTrOkcuKJeyccTPTNaInUCXg99YoE9cwQNkgdQNlutJF0GvZ6eoZN9ZGFJdXtywmRwuWWPEYGowC90ESgNQst7QogkZ4I3S6ohpJU4sF4vLGSA9cWU7qA7OgQFzE16OX7GGUqCO0jd",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

import './Answer.css'

function Answer({ visibility }) {
  if (visibility === 'positive') {
    return (
      <div className="positive_answer">Yes, these strings are an anagram</div>
    )
  }
  if (visibility === 'negative') {
    return (
      <div className="negative_answer">
        No, these strings are not an anagram
      </div>
    )
  }
}

export default Answer

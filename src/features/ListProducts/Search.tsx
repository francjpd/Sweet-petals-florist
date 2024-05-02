import Textfield from '../../shared/Textfield/Textfield'
import SearchIcon from '@mui/icons-material/Search'

type SearchProps = {
  placeholder: string;
  handleSearch: (value: string) => void;
};

export default function Search ({ handleSearch, placeholder }: SearchProps) {
  return (
    <form
      className="flex items-end w-auto flex-row justify-end text-right content-end"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="relative w-full md:max-w-96">
        <Textfield
          prependIcon={<SearchIcon />}
          placeholder={placeholder}
          variant="secondary"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </form>
  )
}

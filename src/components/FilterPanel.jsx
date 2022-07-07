import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearFilter, removeFilter } from 'store/filters/filters-active';
import { selectFilters } from 'store/filters/filters-selector';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  if(currentFilters.length === 0){
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(item => (
            <Badge
            key = {item}
            variant="clearable"
            onClear={() =>  dispatch(removeFilter(item))}
            >
              {item}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};
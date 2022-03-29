import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { fetchPlaceholders } from '../endpoints/placeholder-api';
import { PlaceholderDataType } from '../types/placeholder-data.type';


type usePlaceholderHookProps = {
    loading: boolean;
    data: PlaceholderDataType[];
}

const usePlaceholderHook = () => {
    const [refetch, setRefetch] = useState(false);
    const [state, setState] = useImmer<usePlaceholderHookProps>({
        data: [],
        loading: false
    });

    const fetchData = () => {

        setState(draft => {
            draft.loading = true;
        });
        
        fetchPlaceholders()
        .then(res => {
            setState(draft => {
                draft.data = res;
                draft.loading = false;
            })
        })
        .catch(err => {
            // todo: catch some error
            console.error(err);
            setState(draft => {
                draft.loading = false;
            })
        });
    };


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (refetch) {
            fetchData();
            setRefetch(false);
        };
    }, [refetch]);

    return {
        state,
        refetch: () => setRefetch(true)
    }
};


export {
    usePlaceholderHook
};
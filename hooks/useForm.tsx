'use client'
import React, { useState, useEffect } from 'react';
import { ACTIVITY } from "@/dto/form.dto";

interface FormProps {
    activities: ACTIVITY[];
}

const useForm = ({ activities }: FormProps) => {
    const [selectedActivity, setSelectedActivity] = useState<ACTIVITY | null>(null);
    const [nif, setNif] = useState<string>('');
    const [searchInput, setSearchInput] = useState<string>('');
    const [filteredActivities, setFilteredActivities] = useState<ACTIVITY[]>([]);
    const [isActivityListVisible, setIsActivityListVisible] = useState(false);

    const handleNifChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNif(e.target.value);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };


    const handleActivitySearch = () => {
        const filtered = activities.filter(activity =>
            activity.description.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredActivities(filtered);
    };

    const handleActivitySelect = (activity: ACTIVITY) => {
        setSelectedActivity(activity);
        setIsActivityListVisible(false);
    };

    const handleActivityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchChange(e)
        setSelectedActivity(null);
        handleActivitySearch();
        setIsActivityListVisible(true);
    };

    return {
        handleNifChange,
        handleActivitySelect,
        handleActivityInputChange,
        selectedActivity,
        nif,
        searchInput,
        filteredActivities,
        isActivityListVisible,
        setIsActivityListVisible
    }
}

export default useForm;

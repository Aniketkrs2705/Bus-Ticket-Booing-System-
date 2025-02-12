package com.acts.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acts.daos.SeatRepository;
import com.acts.entities.Seat;
import com.acts.services.SeatService;

@Service
public class SeatServiceImpl implements SeatService {

    @Autowired
    private SeatRepository seatRepository;

    @Override
    public Seat saveSeat(Seat seat) {
        return seatRepository.save(seat);
    }

    
}


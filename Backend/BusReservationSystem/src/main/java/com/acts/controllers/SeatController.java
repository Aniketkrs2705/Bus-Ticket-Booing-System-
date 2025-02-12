package com.acts.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.acts.entities.Seat;
import com.acts.services.SeatService;

@CrossOrigin
@RestController
@RequestMapping("/seats")
public class SeatController {

    @Autowired
    private SeatService seatService;

    @PostMapping
    public ResponseEntity<Seat> saveSeat(@RequestBody Seat seat) {
        Seat savedSeat = seatService.saveSeat(seat);
        return ResponseEntity.ok(savedSeat);
    }

    
}

package com.acts.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.acts.daos.DroppingPointDao;
import com.acts.daos.PickingPointDao;
import com.acts.entities.DroppingPoint;
import com.acts.entities.PickingPoint;
import com.acts.entities.Route;
import com.acts.models.PointDTO;
import com.acts.models.Response;
import com.acts.models.RouteInDTO;
import com.acts.services.RouteService;

@CrossOrigin
@RestController
@RequestMapping("/route")
public class RouteController {
	@Autowired
	private RouteService routeService;
	@Autowired
	private PickingPointDao pickingDao;
	@Autowired
	private DroppingPointDao droppingDao;
	
	@PostMapping("/addroute")
	public ResponseEntity<?> addRoute(RouteInDTO route) {
		Route newRoute = new Route(route.getFromStation(),route.getToStation());
		Route r = routeService.saveRoute(newRoute);
		if(r != null)
			return Response.success(r);
		return Response.error("Failed!");
	}
	
	@GetMapping("/getroutes")
	public ResponseEntity<?> getAllRoute(){
		List<Route> list = routeService.getAllRoutes();
		List<RouteInDTO> rlist = new ArrayList<>();
		if(list != null)
			for (Route route : list) {
				RouteInDTO r = RouteInDTO.fromEntity(route);
				rlist.add(r);
			}
		if(rlist != null)
			return Response.success(rlist);
		return Response.error("Not Found!");
	}
	
	@DeleteMapping("/deleteroute/{id}")
	public ResponseEntity<?> deleteRoute(@PathVariable int id){
		Route route = routeService.findRouteById(id);
		boolean result = routeService.deleteRoute(route);
		if(result)
			Response.success("Deleted Successfully!");
		return Response.error("Failed!");
	}
	
	@PostMapping("/addpickingpoint/{routeId}")
	public ResponseEntity<?> addPickingPoint(@PathVariable int routeId, @RequestParam("name") String name){
		Route route = routeService.findRouteById(routeId);
			if(route!=null) {
				PickingPoint pp= new PickingPoint(name);
				pp.setRoute(route);
				PickingPoint p = pickingDao.save(pp);
				if(p != null)
					return Response.success("added Successfullly");
			}
			return Response.error("Failed !");
	}
	
	@PostMapping("/adddroppingpoint/{routeId}")
	public ResponseEntity<?> addDroppingPoint(@PathVariable int routeId, @RequestParam("name") String name){
		Route route = routeService.findRouteById(routeId);
			if(route!=null) {
				DroppingPoint pp= new DroppingPoint(name);
				pp.setRoute(route);
				DroppingPoint p = droppingDao.save(pp);
				if(p != null)
					return Response.success("added Successfullly");
			}
			return Response.error("Failed!");
	}
	
	@GetMapping("/getpickingpoint/{routeId}")
	public ResponseEntity<?> getAllPickingPoint(@PathVariable int routeId){
		Route route = routeService.findRouteById(routeId);
		List<PickingPoint> list = route.getPickingPoint();	
		List<PointDTO> plist = new ArrayList<>();
		if(list != null)
			for (PickingPoint pickingPoint : list) {
				PointDTO dto = new PointDTO();
				dto.setId(pickingPoint.getPickingPointId());
				dto.setName(pickingPoint.getName());
				plist.add(dto);
			}
		if(plist != null)
			return Response.success(plist);
		return Response.error("Not Found!");
	}	
	
	@GetMapping("/getdroppingpoint/{routeId}")
	public ResponseEntity<?> getAllDroppingPoint(@PathVariable int routeId){
		Route route = routeService.findRouteById(routeId);
		List<DroppingPoint> list = route.getDroppingPoint();	
		List<PointDTO> plist = new ArrayList<>();
		if(list != null)
			for (DroppingPoint droppingPoint : list) {
				PointDTO dto = new PointDTO();
				dto.setId(droppingPoint.getDroppingPointId());
				dto.setName(droppingPoint.getName());
				plist.add(dto);
			}
		if(plist != null)
			return Response.success(plist);
		return Response.error("Not Found!");
	}	
	
	@PostMapping("/pickingpoints")
	public ResponseEntity<?> pickingPoint(@RequestParam("fromStation") String fromStation, @RequestParam("toStation") String toStation){
		Route route =  routeService.getRouteByStation(fromStation,toStation);
		List<String> p = new ArrayList<>();
		if(route != null) {
			List<PickingPoint> point = route.getPickingPoint();
			for (PickingPoint pickingPoint : point) {
				p.add(pickingPoint.getName());
			}
		}
		if(p != null)
			return Response.success(p);
		return Response.error("Failed!");
	}
	
	@PostMapping("/droppingpoints")
	public ResponseEntity<?> droppingPoint(@RequestParam("fromStation") String fromStation, @RequestParam("toStation") String toStation){
		Route route =  routeService.getRouteByStation(fromStation,toStation);
		List<String> p = new ArrayList<>();
		if(route != null) {
			List<DroppingPoint> point = route.getDroppingPoint();
			for (DroppingPoint droppingPoint : point) {
				p.add(droppingPoint.getName());
			}
		}
		if(p != null)
			return Response.success(p);
		return Response.error("Failed!");
	}
	
	@DeleteMapping("/routelist/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") int id) {
		boolean success = routeService.deleteById(id);
		return ResponseEntity.ok(success);
	}
}




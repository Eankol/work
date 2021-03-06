package com.shxt.dsmserv.controller.energyManaController;

import com.shxt.dsmserv.service.energyManaServ.mmxuVolcServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class mmxuVolcCon {
    @Autowired
    mmxuVolcServ msv;

    @GetMapping("/getVol")
    public Map getVol(String ldId,String queryDate){
        return msv.getVol(ldId, queryDate);
    }

    @GetMapping("/getMstaVol")
    public Map getMstaVal(String startDate,String endDate,String ldId){
        return  msv.getMstaVol(startDate, endDate, ldId);
    }

    @GetMapping("/getAllVol")
    public Map getAllVal(String startDate,String endDate,String ldId){
        return  msv.getMstaVols(startDate, endDate, ldId);
    }

    @GetMapping("/getAllVolTwo")
    public Map getAllValTwo(String startDate,String endDate,String ldId, int a, int b){
        String c = (a-1)*b+"";
        String d = b+"";
        return  msv.getMstaVolsTwo(startDate, endDate, ldId, c, d);
    }

    @GetMapping("/getAllVolTT")
    public Map getAllValTT(String startDate,String endDate,String ldId){
        return  msv.getMstaVolsTT(startDate, endDate, ldId);
    }
}

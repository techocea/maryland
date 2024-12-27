"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WelcomePage = () => {
  return (
    <main className="min-h-[75vh] flex items-center justify-center py-12 px-4">
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col space-y-3 items-center justify-center w-full">
          <h1 className="capitalize font-semibold text-muted text-2xl">
            Welcome to the student Portal
          </h1>

          <Card className="max-w-md md:max-w-2xl lg:max-w-[700px] w-full rounded-lg">
            <CardContent className="flex justify-between">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-2xl text-primary rounded-full border border-primary">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Complete your Account Information
                  </h3>
                  <p className="text-muted-foreground font-medium text-sm">
                    Fill in your information to complete your account
                  </p>
                </div>
              </div>
              <div>
                <Button asChild>
                  <Link href="/profile">Fill Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;

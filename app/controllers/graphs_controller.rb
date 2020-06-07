class GraphsController < ApplicationController
  def index
    gon.weight_records = Graph.all
  end
end
